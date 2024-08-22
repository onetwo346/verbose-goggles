function trackPackage() {
 const trackingNumber = document.getElementById('trackInput').value;
 const enteredPrivacy = document.getElementById('trackPrivacy').value;

 fetch(`/api/track/${trackingNumber}`)
     .then(response => response.json())
     .then(details => {
         if (details.privacy === enteredPrivacy) {
             document.getElementById('trackingDetails').innerHTML = `
                 <p><strong>Tracking Number:</strong> ${trackingNumber}</p>
                 <p><strong>Origin:</strong> ${details.origin}</p>
                 <p><strong>Destination:</strong> ${details.destination}</p>
                 <p><strong>Status:</strong> ${details.status}</p>
             `;
         } else {
             document.getElementById('trackingDetails').innerText = 'Privacy setting does not match.';
         }
     })
     .catch(() => {
         document.getElementById('trackingDetails').innerText = 'Tracking number not found.';
     });
}
