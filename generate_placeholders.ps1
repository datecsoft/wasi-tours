$tours = Get-ChildItem -Path "assets/images/tours" -Directory

foreach ($tour in $tours) {
    echo "Processing $($tour.Name)"
    $source = "$($tour.FullName)\01.jpg"
    
    if (Test-Path $source) {
        for ($i = 2; $i -le 5; $i++) {
            $dest = "$($tour.FullName)\0$i.jpg"
            if (-not (Test-Path $dest)) {
                echo "Copying 01.jpg to 0$i.jpg for $($tour.Name)"
                Copy-Item -Path $source -Destination $dest
            }
        }
    }
    else {
        echo "Warning: 01.jpg not found for $($tour.Name), cannot generate placeholders."
    }
}
