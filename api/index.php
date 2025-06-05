
---

### 💡 2. `index.php` (API Entry Point)  
**Path:** `gcnam-job-api-project/api/index.php`  
**Content:**
```php
<?php
require_once 'utils.php';

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $input = json_decode(file_get_contents('php://input'), true);

    $payload = transformPayload($input);

    $remoteResponse = postToRemoteAPI($payload);

    echo json_encode([
        'unitName' => $input['Unit Name'],
        'rate' => extractRate($remoteResponse),
        'dateRange' => $payload['Arrival'] . ' to ' . $payload['Departure'],
        'available' => true
    ]);
} else {
    echo json_encode(['error' => 'Invalid request method.']);
}
?>
