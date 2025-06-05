<?php
function transformPayload($input) {
    $guests = [];
    foreach ($input['Ages'] as $age) {
        $guests[] = ["Age Group" => $age >= 12 ? "Adult" : "Child"];
    }

    return [
        "Unit Type ID" => -2147483637,
        "Arrival" => convertDate($input['Arrival']),
        "Departure" => convertDate($input['Departure']),
        "Guests" => $guests
    ];
}

function convertDate($date) {
    $parts = explode('/', $date);
    return "$parts[2]-$parts[1]-$parts[0]";
}

function postToRemoteAPI($payload) {
    $ch = curl_init('https://dev.gondwana-collection.com/Web-Store/Rates/Rates.php');
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
    curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode($payload));
    curl_setopt($ch, CURLOPT_HTTPHEADER, ['Content-Type: application/json']);
    $response = curl_exec($ch);
    curl_close($ch);
    return json_decode($response, true);
}

function extractRate($response) {
    return $response['rate'] ?? 'N/A';
}
?>
