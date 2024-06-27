const appleBadgeBase64 = "data:image/png;base64,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";

export default appleBadgeBase64;