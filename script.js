// Dodaj event listener dla każdej grupy kafelków
document.querySelectorAll('.options').forEach(optionGroup => {
    // Znajdź powiązane ukryte pole formularza
    const input = document.getElementById(optionGroup.id.replace('-options', ''));

    // Obsługa kliknięcia na kafelki w danej grupie
    optionGroup.addEventListener('click', (e) => {
        const clickedOption = e.target;

        // Sprawdź, czy kliknięto na kafelek (element z klasą "option")
        if (clickedOption.classList.contains('option')) {
            // Usuń klasę "selected" z wszystkich kafelków w tej grupie
            optionGroup.querySelectorAll('.option').forEach(option => {
                option.classList.remove('selected');
            });

            // Dodaj klasę "selected" do klikniętego kafelka
            clickedOption.classList.add('selected');

            // Zapisz wartość wybranego kafelka do ukrytego pola formularza
            input.value = clickedOption.dataset.value;
        }
    });
});
