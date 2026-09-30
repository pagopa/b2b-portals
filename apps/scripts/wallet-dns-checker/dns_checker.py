### Python Script (dns_checker.py)                                                                                              
                                                                                                                                

import csv                                                                                                                    
import dns.resolver                                                                                                           
import dns.exception                                                                                                          
import sys                                                                                                                    
                                                                                                                                
# --- Configuration ---                                                                                                       
CSV_FILE_PATH = "./wallet-dns-records.csv"                                                   
                                                                                                                                
# IMPORTANT:                                                                                                                  
# This script assumes your CSV file has the following headers (case-insensitive):                                             
# 1. name: The domain name (e.g., "www.example.com")                                                                          
# 2. record_type: The DNS record type ("A" or "CNAME")                                                                        
# 3. expected_value: The value that should be returned (e.g., "192.0.2.1" for A, or "target.example.com" for CNAME)           
                                                                                                                                
def lookup_and_check(name: str, record_type: str, expected_value: str) -> list[dict]:                                         
    """                                                                                                                       
    Performs the DNS lookup and compares the result(s) to the expected value.                                                 
    Returns a list of dictionaries, each representing a result for a single row.                                              
    """                                                                                                                       
    results = []                                                                                                              
    print(f"\n[Checking] Name: {name}, Type: {record_type}")                                                                  
                                                                                                                                
    try:                                                                                                                      
        # 1. Handle CNAME records                                                                                             
        if record_type.upper() == 'CNAME':                                                                                    
            # Query for the canonical name pointer                                                                            
            answers = dns.resolver.resolve(name, record_type)                                                                 
                                                                                                                                
            # A CNAME record points to another name. The result should be the target name.                                    
            # We grab the first answer's target name for comparison.                                                          
            actual_target = str(answers[0].target).rstrip('.')                                                                
                                                                                                                                
            match_status = actual_target == str(expected_value).rstrip('.')                                                   
                                                                                                                                
            results.append({                                                                                                  
                "name": name,                                                                                                 
                "record_type": record_type,                                                                                   
                "expected_value": expected_value,                                                                             
                "actual_value": actual_target,                                                                                
                "match": match_status,                                                                                        
                "details": f"Found CNAME target: {actual_target}"                                                             
            })                                                                                                                
            return results                                                                                                    
                                                                                                                                
        # 2. Handle A records (IPv4)                                                                                          
        elif record_type.upper() == 'A':                                                                                      
            # Query for A records                                                                                             
            answers = dns.resolver.resolve(name, record_type)                                                                 
                                                                                                                                
            # A record can return multiple IPs, so we check if the expected value is one of them                              
            # We extract all IP addresses into a list.                                                                        
            actual_ips = [str(rdata).rstrip('.') for rdata in answers]                                                        
                                                                                                                                
            if not actual_ips:                                                                                                
                results.append({                                                                                              
                    "name": name,                                                                                             
                    "record_type": record_type,                                                                               
                    "expected_value": expected_value,                                                                         
                    "actual_value": "N/A",                                                                                    
                    "match": False,                                                                                           
                    "details": "A record not found."                                                                          
                })                                                                                                            
                return results                                                                                                
                                                                                                                                
            # Check if the expected value exists in the list of resolved IPs.                                                 
            # Note: If the CSV expects multiple IPs, this simple check might fail.                                            
            # For this script, we assume the CSV provides one expected IP.                                                    
            match_status = expected_value.strip('.') in actual_ips                                                            
                                                                                                                                
            results.append({                                                                                                  
                "name": name,                                                                                                 
                "record_type": record_type,                                                                                   
                "expected_value": expected_value,                                                                             
                "actual_value": ", ".join(actual_ips),                                                                        
                "match": match_status,                                                                                        
                "details": f"Found IPs: {', '.join(actual_ips)}"                                                              
            })                                                                                                                
            return results                                                                                                    
                                                                                                                                
        else:                                                                                                                 
            results.append({                                                                                                  
                "name": name,                                                                                                 
                "record_type": record_type,                                                                                   
                "expected_value": expected_value,                                                                             
                "actual_value": "N/A",                                                                                        
                "match": False,                                                                                               
                "details": f"Unsupported record type: {record_type}"                                                          
            })                                                                                                                
            return results                                                                                                    
                                                                                                                                
    except dns.resolver.NoAnswer:                                                                                             
        return [{                                                                                                             
            "name": name,                                                                                                     
            "record_type": record_type,                                                                                       
            "expected_value": expected_value,                                                                                 
            "actual_value": "N/A",                                                                                            
            "match": False,                                                                                                   
            "details": "No answer received (Record might not exist or name is incorrect)."                                    
        }]                                                                                                                    
    except dns.resolver.NXDOMAIN:                                                                                             
        # NXDOMAIN means the domain name does not exist.                                                                      
        return [{                                                                                                             
            "name": name,                                                                                                     
            "record_type": record_type,                                                                                       
            "expected_value": expected_value,                                                                                 
            "actual_value": "N/A",                                                                                            
            "match": False,                                                                                                   
            "details": "Domain does not exist (NXDOMAIN)."                                                                    
        }]                                                                                                                    
    except dns.exception.Timeout:                                                                                             
        return [{                                                                                                             
            "name": name,                                                                                                     
            "record_type": record_type,                                                                                       
            "expected_value": expected_value,                                                                                 
            "actual_value": "N/A",                                                                                            
            "match": False,                                                                                                   
            "details": "DNS query timed out."                                                                                 
        }]                                                                                                                    
    except Exception as e:                                                                                                    
        return [{                                                                                                             
            "name": name,                                                                                                     
            "record_type": record_type,                                                                                       
            "expected_value": expected_value,                                                                                 
            "actual_value": "N/A",                                                                                            
            "match": False,                                                                                                   
            "details": f"An unexpected error occurred: {e}"                                                                   
        }]                                                                                                                    
                                                                                                                                
def main():                                                                                                                   
    """Main function to process the CSV file."""                                                                              
    print("-" * 50)                                                                                                           
    print(f"🚀 Starting DNS Verification using file: {CSV_FILE_PATH}")                                                        
    print("-" * 50)                                                                                                           
                                                                                                                                
    try:                                                                                                                      
        with open(CSV_FILE_PATH, mode='r', newline='', encoding='utf-8') as csvfile:                                          
            # Use DictReader to read rows as dictionaries using headers                                                       
            reader = csv.DictReader(csvfile)                                                                                  
                                                                                                                                
            # Assume header names are name, record_type, and expected_value                                                   
            results_data = []                                                                                                 
                                                                                                                                
            for i, row in enumerate(reader):                                                                                  
                try:                                                                                                          
                    # Basic validation for required fields                                                                    
                    name = row.get('name', '').strip()                                                                        
                    record_type = row.get('record_type', '').strip()                                                          
                    expected_value = row.get('expected_value', '').strip()                                                    
                                                                                                                                
                    if not name or not record_type or not expected_value:                                                     
                        print(f"Warning: Skipping row {i+1} due to missing required fields (name, record_type, or expected_value).")
                        continue                                                                                              
                                                                                                                                
                    # Run the lookup and check tool                                                                           
                    page_results = lookup_and_check(name, record_type, expected_value)                                        
                    results_data.extend(page_results)                                                                         
                                                                                                                                
                except Exception as e:                                                                                        
                    print(f"!! CRITICAL ERROR processing row {i+1}: {e}")                                                     
                    results_data.append({                                                                                     
                        "name": row.get('name'),                                                                              
                        "record_type": row.get('record_type'),                                                                
                        "expected_value": row.get('expected_value'),                                                          
                        "actual_value": None,                                                                                 
                        "match": False,                                                                                       
                        "details": f"Processing failed: {e}"                                                                  
                    })                                                                                                        
                                                                                                                                
    except FileNotFoundError:                                                                                                 
        print(f"\n[ERROR] The file was not found at: {CSV_FILE_PATH}")                                                        
        sys.exit(1)                                                                                                           
    except Exception as e:                                                                                                    
        print(f"\n[FATAL ERROR] Could not read the CSV file: {e}")                                                            
        sys.exit(1)                                                                                                           
                                                                                                                                
    # --- Summary Report Generation ---                                                                                       
                                                                                                                                
    print("\n" + "=" * 60)                                                                                                    
    print("                 ✨ DNS VERIFICATION SUMMARY ✨")                                                                  
    print("=" * 60)                                                                                                           
                                                                                                                                
    failures = sum(1 for r in results_data if not r['match'])                                                                 
    total = len(results_data)                                                                                                 
    passes = total - failures                                                                                                 
                                                                                                                                
    print(f"Total Records Checked: {total}")                                                                                  
    print(f"✅ Matches Found: {passes}")                                                                                      
    print(f"❌ Mismatches/Failures: {failures}")                                                                              
    print("=" * 60)                                                                                                           
                                                                                                                                
    # Output results in a structured format (e.g., CSV for easy importing)                                                    
    output_csv_path = "dns_verification_results.csv"                                                                          
    fieldnames = list(results_data[0].keys())                                                                                 
                                                                                                                                
    with open(output_csv_path, mode='w', newline='', encoding='utf-8') as csvfile:                                            
        writer = csv.DictWriter(csvfile, fieldnames=fieldnames)                                                               
        writer.writeheader()                                                                                                  
        writer.writerows(results_data)                                                                                        
                                                                                                                                
    print(f"\n✅ Analysis complete! Detailed results saved to: {output_csv_path}")                                            
                                                                                                                                
if __name__ == "__main__":                                                                                                    
       main()                             