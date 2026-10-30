function calcularDoppler() {

    const observador = Number(
        document.getElementById("observador").value
    );

    const fonte = Number(
        document.getElementById("fonte").value
    );

    const som = Number(
        document.getElementById("som").value
    );

    const frequencia = Number(
        document.getElementById("frequencia").value
    );

    const resultado = document.getElementById("resultado");

    if (
        !Number.isFinite(observador) ||
        !Number.isFinite(fonte) ||
        !Number.isFinite(som) ||
        !Number.isFinite(frequencia) ||
        som <= 0 ||
        frequencia <= 0 ||
        observador < 0 ||
        fonte < 0 ||
        observador >= som ||
        fonte >= som
    ) {
        resultado.innerHTML =
            "Insira valores válidos. As velocidades devem ser positivas e menores que a velocidade do som.";

        return;
    }

    const frequenciaAparente =
        frequencia * (som + observador) / (som - fonte);

    resultado.innerHTML =
        "Frequência percebida: " +
        frequenciaAparente.toFixed(2) + " Hz";
}
