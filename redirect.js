export default function handler(req, res) {
  // ⚠️ REMPLACEZ CECI PAR VOTRE VRAI LIEN ONLYFANS
  const ofLink = "https://onlyfans.com/lapetite_jade/c56";
  
  // Redirection instantanée (code 301 = permanent redirect)
  res.writeHead(301, {
    'Location': ofLink
  });
  res.end();
}