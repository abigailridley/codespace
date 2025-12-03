
<?php

error_reporting(E_ALL);
ini_set('display_errors', 1);
include 'includes/nav.php';


if ($_SERVER['REQUEST_METHOD'] == 'POST')
{
    // connect to database
    require ('includes/db_connect.php');

    //initialise error array
    $errors = array();

    //check for item name
    if (empty($_POST['item_name']))
    {
        $errors[] = 'Enter the item name.'; 
    } else {
        $n = mysqli_real_escape_string($link, trim($_POST['item_name']));
    }
    //check for item desc
    if (empty($_POST['item_desc']))
    {$errors[] = 'Enter item description';}
    else
    {$d = mysqli_real_escape_string($link, trim($_POST['item_desc']));}

    //item img
    if (empty($_POST['item_img']))
    {$errors[] = 'Enter the item image.';}
    else 
    {$img = mysqli_real_escape_string($link, trim($_POST['item_img']));}

    //item price
    if (empty($_POST['item_price']))
    {$errors[]='Enter the item price';}
    else{$p = mysqli_real_escape_string($link, trim($_POST['item_price']));}

    //enter data into table on success
    if (empty($errors))
    {
        $q = "INSERT INTO products(item_name, item_desc, item_img, item_price)
        VALUES ('$n', '$d', '$img','$p')";
        $r = mysqli_query($link, $q);
        if ($r) {
    mysqli_close($link);
    header("Location: index.php?created=1");
    exit();
}
    }
    else {
        echo '<p>The following error(s) occured:</p>';
        foreach ($errors as $msg)
        {echo "$msg<br>";}
        echo '<p>Please try again</p>';

        //close db connection
        mysqli_close($link);
    }
}


?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <div class="container mt-5">
   <h1>Add item</h1>
   
    <form action="create.php" method="post">
<!-- input box for item name -->
 <label for="name">Item name:</label>
<input type="text"
id="item_name"
class="form-control"
name="item_name"
required
value="<?php if (isset($_POST['item_name'])) echo $_POST['item_name'];?>">

<!-- input for item desc -->
 <label for="description">Description:</label>
 <textarea 
 id="item_desc"
 class="form-control"
 name="item_desc"
 required><?php if (isset($_POST['item_desc'])) echo $_POST ['item_desc']; ?> </textarea>

<!-- input for image path -->
 <label for="image">Image:</label>
<input type="text"
id="item_img"
class="form-control"
name="item_img"
required
value="<?php if (isset($_POST['item_img'])) echo $_POST['item_img']; ?>">

<!-- input for item price -->
<label for="price">Price</label>
<input type="number"
id="item_price"
class="form-control"
name="item_price"
min="0" step="0.01"
required
value="<?php if (isset($_POST['item_price'])) echo $_POST['item_price'] ?>">

<!-- submit button -->
 <input type="submit" class="btn btn-dark" value="Submit">
    </form>
   </div>
</body>
</html>

<?php
 include 'includes/footer.php';
?>