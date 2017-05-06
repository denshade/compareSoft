<?php
/**
 * Created by PhpStorm.
 * User: Lieven
 * Date: 17-4-2017
 * Time: 10:16
 */

function idFy($name)
{
    return str_replace(" ", "_", $name);
}

$filehandle = fopen("ranges.csv", "r");
$indexArray = fgetcsv($filehandle);

/**
 *   0 => string '' (length=0)
1 => string 'skype basic free' (length=16)
2 => string 'gotomeeting regular' (length=19)
3 => string 'google hangouts' (length=15)
4 => string 'google hangouts for business' (length=28)
5 => string 'talky' (length=5)
 */
$features = [];
$row = 1;
$result = [];
//[name] => ["name" => Boolean]
foreach ($indexArray as $key => $value)
{
    if ($key == 0) continue;
    $result[$value] = [];
}

while (($data = fgetcsv($filehandle, 1000, ",")) !== FALSE) {
    $num = count($data);
    $row++;
    $featureName = $data[0];
    $features []= $featureName;
    $featureId = idFy($featureName);
    for ($c=1; $c < $num; $c++) {
        $result[$indexArray[$c]] [$featureId] = $data[$c];
    }
}

echo "Features HTML: <BR/><hr>";
foreach ($features as $feature)
{
    $featureId = idFy($feature);
    echo "selectRange(\"".$feature."\", \"".$featureId."\", \"extrafunc\");<BR/>";
}
echo "<br/>Product oversight: <BR/><hr>";

foreach ($indexArray as $key => $value) {
    if ($key == 0) continue;
    $product = $value;
    $productid = idFy($product);
    echo htmlentities("<div id=\"" . $productid . "\" class=\"solution\">" . $product . "</div>")."<br/>";
}

echo "<br/>Product json: <BR/><hr>";

foreach($result as $product => $featureList)
{
    $obj = new stdClass();
    $obj->name = idFy($product);
    foreach($featureList as $feature => $value)
    {
        $obj->{$feature} = $value;
    }

    echo json_encode((array)$obj)."<BR/>";
}
