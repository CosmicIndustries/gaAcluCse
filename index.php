<?php
  // get all non‑dot files in this dir
  $files = array_diff(scandir(__DIR__), ['.', '..']);
?>
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Directory Listing</title>
  <style>
    body { font-family: sans-serif; padding: 1em; }
    ul { list-style: none; padding: 0; }
    li { margin: .5em 0; }
    a { text-decoration: none; color: #036; }
    a:hover { text-decoration: underline; }
  </style>
</head>
<body>
  <h1>Files in “<?php echo basename(__DIR__); ?>”</h1>
  <ul>
    <?php foreach ($files as $f): ?>
      <li><a href="<?php echo rawurlencode($f); ?>"><?php echo htmlspecialchars($f); ?></a></li>
    <?php endforeach; ?>
  </ul>
</body>
</html>
