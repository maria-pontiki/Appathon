# Appathon
## CTGOV-01: Αριθμός Ασθενών που συμμετέχουν σε κλινικές μελέτες για μια συγκεκριμένη ασθένεια  

Να φτιάξετε μια δικτυακή εφαρμογή η οποία βρίσκει το σύνολο των ασθενών που συμμετέχουν σε κλινικές δοκιμές (enrollment – type: actual) που αφορούν μια συγκεκριμένη ασθένεια (π.χ. Sjogren’s Syndrome). Το input θα είναι το όνομα της ασθένειας και το όνομα της χώρας το οποίο θα το ορίζει ο χρήστης μέσω της web σελίδας και και ακολούθως θα βρίσκει το πλήθος των ασθενών που χρειάστηκαν (enrollment) για την πραγματοποίηση των κλινικών μελετών που έχουν ολοκληρωθεί (overall_status) επιτυχώς (Completed) ή τερματίστηκαν (Terminated).

# Οδηγίες Εγκατάστασης

1. Εγκατασταση του node js τοπικα απο τον παρακάτω σύνδεσμο https://nodejs.org/en/download/ . To npm εγκαθισταται αυτόματα.
2. Καντε clone τον κώδικα απο το git : https://github.com/maria-pontiki/Appathon.git
3. Καντε install thn Mongo DB. Πληροφορίες : https://docs.mongodb.com/manual/installation/
4. Καντε download και untar το αρχειο απο αυτο το link: 
5. Καντε import το αρχειο στην mongo db με αυτην την εντολή: mongoimport --db clinicalTrialsTwo --collection trialDataTwo --file clinical_trials_mongo.json
6. Τρέξτε cd Appathon && npm install για να κανει install τα js modules
7. Τρέξτε npm start για να ξεκινήσει ο server
8. Ανοίχτε έναν browser και συνδεθείτε στο http://localhost:3000
