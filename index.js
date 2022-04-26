const express = require('express');
const app = express();
const PORT = 8080;

app.use(express.json())

app.listen(
    PORT,
    () => console.log(`it's alive on htt[://localhost:${PORT}`)
)

app.get(`/tshirt`, (req, res) => {
    res.status(200).send({
        tshirt: 'yay',
        size: 'large'
    })
});

app.post(`/tshirt/:id`, (req, res) => {

    const {id} = req.params;
    const {logo} = req.body;

    if (!logo) {
        res.status(418).send( { message: 'We need a logo!'})
    } else {
        res.send({
            tshirt: `YAY! with your ${logo} and ID of ${id}`, 
        })
    }

    
});

app.get(`/health`, (req, res) => {
    // HEALTH RESPONSE HERE
    var healthy = true;    
    // Run a health check.
    

    if (healthy) {
        res.status(200).send({message: "Service is healthy"})
    } else {
        res.status(503).send({message:"Service is not healthy"})
    }

});

app.get(`/model`, (req, res) => {
    // List all available text-to-speech models for the service.
    res.status(200).send({
       String: `["tts_models.en.ek1.tacotron2",
        "tts_models.en.ljspeech.tacotron2-DDC",
        "tts_models.en.ljspeech.glow-tts",
        "tts_models.en.ljspeech.fast_pitch"]`
    })
});

app.get(`/model/:id`, (req, res) => {
    // Retrieve details about a specified text-to-speech model.
    
});

app.get(`/text`, (req, res) => {
    // List all generated audios.

});

app.delete(`/text/:id`, (req, res) => {
    // Delete a text-to-speech job.

    // Find the id of the response 


});

app.get(`/text/:id`, (req, res) => {
    // Retrieve details about a text-to-speech request.
    const {id} = req.params
    // Determine if the id in the request is in the exsisting information.
    var success = false;
    
    // Handle Response
    if (success) {

    } else {
        res.status(200).send(
            {
                
            }
        )
    }
        
});

app.post(`/text`, (req, res) => {
    // Request a new message is translated into synthesized speech.

});