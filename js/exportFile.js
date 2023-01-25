const formatCarrito = () => {
  const headerNames = ['nombre', 'precio', 'cantidad'];
  const data = [headerNames, ...carrito.map(item => [item.nombre, item.precio, item.cantidad])];
  console.log({data})
  return data
}

const saveFile = () => {
  var wb = XLSX.utils.book_new();
  wb.Props = {
    Title: "Compras",
    Subject: "Test",
    Author: "Seba Trotta",
    CreatedDate: new Date(2023, 12, 19),
  };

  wb.SheetNames.push("Test Sheet");
  var ws = XLSX.utils.aoa_to_sheet(formatCarrito());
  wb.Sheets["Test Sheet"] = ws;

  var wbout = XLSX.write(wb, { bookType: "xlsx", type: "binary" });

  function s2ab(s) {
    var buf = new ArrayBuffer(s.length);
    var view = new Uint8Array(buf);
    for (var i = 0; i < s.length; i++) view[i] = s.charCodeAt(i) & 0xff;
    return buf;
  }

  saveAs(new Blob([s2ab(wbout)],{type:"application/octet-stream"}), 'test.xlsx');
};
