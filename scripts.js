document.querySelectorAll('.continent').forEach(continent => {
    continent.addEventListener('click', () => {
        const continentName = continent.getAttribute('data-continent');
        window.location.href = `${continentName}.html`;
    });
});
