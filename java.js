function calculateArea() {
    const base = parseFloat(document.getElementById('base').value);
    const height = parseFloat(document.getElementById('height').value);

    if (isNaN(base) || isNaN(height)) {
        document.getElementById('result').textContent = 'Iltimos, barcha qiymatlarni kiriting!';
        return;
    }

    const area = 0.5 * base * height;
    document.getElementById('result').textContent = `Uchburchakning yuzi: ${area.toFixed(2)} birlik.`;
}
