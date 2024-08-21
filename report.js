const newman = require('newman');


const collectionUrl = `https://api.postman.com/collections/37031452-db7bece5-9649-4507-aae1-3613e5300304?access_key=PMAT-01J5T1VB793ZEBZHKSFPT2H4P6`;

newman.run({
    
    collection: collectionUrl,
    
    reporters: 'htmlextra',
    iterationCount: 1,
    reporter: {
        htmlextra: {
            export: './Reports/report.html', // If not specified, the file will be written to `newman/` in the current working directory.
        }
    }
}, function (err) {
    if (err) { throw err; }
    console.log('collection run complete!');
});
