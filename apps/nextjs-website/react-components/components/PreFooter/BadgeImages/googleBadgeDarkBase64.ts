const googleBadgeDarkBase64 = "data:image/png;base64,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";

export default googleBadgeDarkBase64;