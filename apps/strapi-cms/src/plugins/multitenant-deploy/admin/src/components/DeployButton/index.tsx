import React, { useState } from "react";
import { Button } from "@strapi/design-system";
import { Upload } from "@strapi/icons";
import pluginId from "../../pluginId";
import { useFetchClient } from "@strapi/helper-plugin";

const DeployButton: React.FC<void> = () => {
    const [deploying, setDeploying] = useState(false); // Used to prevent multiple simultaneous calls
    const { post } = useFetchClient();

    const handleDeploy = async () => {
      if(confirm('Confermare il deploy?')) {
        setDeploying(true);
        const res = await post(`/${pluginId}/trigger`);
        setDeploying(false);

        if (res.status === 200) {
          alert('Deploy avviato! Controlla tra 10 minuti per vedere il risultato.');
        } else {
          alert('C\'è stato un errore nell\'avvio del deploy.');
        }
      }
    }

    return <Button variant="secondary" disabled={deploying} startIcon={<Upload />} onClick={handleDeploy}>Deploy</Button>
}

export default DeployButton;