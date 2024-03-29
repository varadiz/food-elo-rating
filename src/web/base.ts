import type * as elements from 'typed-html'

export const BaseHTML = ({ children }: elements.Children) => `
<!DOCTYPE html>
<html lang="jp">
<head>
  <meta charset="UTF-8">
  <title>Food Wars</title>
  <meta name="viewport" content="width=device-width,initial-scale=1">
  <script src="https://unpkg.com/htmx.org"></script>
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65" crossorigin="anonymous">
  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-kenU1KFdBIe4zVF0s0G1M5b4hcpxyD9F7jL+jjXkk+Q2h455rYXK/7HAuoJl+0I4" crossorigin="anonymous"></script>
  <link href="https://fonts.cdnfonts.com/css/amazdoom" rel="stylesheet">
</head>
<body class="container">
${children as string}
</body>

<style>
a {
    text-decoration: none;
    color: #E0E0E0;
  }

a:hover {
  color: #FFD700;
}

body {
  font-family: 'AmazDooMLeft2';
  background-color: #121212;
  color: #E0E0E0;
}

h1 {
  font-size: 5em;
  margin: 20px;
  letter-spacing: 12px;
}

ul {
  list-style-type: none;
  padding: 0;
}

.glow {
  transition: box-shadow 0.3s ease-in-out;
  border-radius: 4px;
}

.glow:hover {
  box-shadow: 0 0 19px 13px rgba(255, 0, 0, 0.6);
}
</style>
</html>
`
