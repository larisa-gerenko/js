// Задача 2

function f(x) {
  if (x < 1) {
    return x * x - 4 * x;
  }

  return 5 / x;
}

const line = {
  x: [],
  y: [],
  type: "scatter",
};

for (let x = -5; x < 5; x += 0.01) {
  const y = f(x);

  line.x.push(x);
  line.y.push(y);
}

const lineDiv = document.getElementById("graph");
const data = [line];
const layout = {
  title: "График функции f(x)",
};

Plotly.plot(graph, data, layout);
