const express = require('express');
const app = express();
const port = 3000;

// Sugestões de café da manhã
const breakfastSuggestions = [
    "Aveia com frutas",
    "Iogurte natural com mel e granola",
    "Smoothei de espinafre, banana e morango"
];

// Sugestões de almoço
const lunchSuggestions = [
    "Salada de quinoa com vegetais",
    "Frango grelhado com batata doce e brócolis",
    "Peixe assado com arroz integral e salada"
];

// Sugestões de jantar
const dinnerSuggestions = [
     "Sopa de lentilhas",
     "Salada de grão-de-bico com abacate",
     "Tofu grelhado com legumes"
];

// Rotas para sugestões de café da manhã
app.get('/breakfest', (req,res) => {
    res.json({
        meal: 'Breakfast',
        suggestions: breakfastSuggestions
    });
});

// Rota para sugestões de almoço
app.get('/lunch', (req, res) => {
    res.json({
        meal: 'Lunch',
        suggestions: lunchSuggestions
    });
});

//Rotas para sugestões de jantar
app.get('/dinner', (req,res) => {
    res.json({
        meal: 'Dinner',
        suggestions: dinnerSuggestions
    });
});

// Iniciar o servidor
app.listen(port, () => {
    console.log('Healthy Eating API running at http://localhost:${port}');
});