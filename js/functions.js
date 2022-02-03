 const SCAN_OPTIONS = {
    acceptAllAdvertisements: true,
    keepRepeatedDevices: true
};

//Bluetoothデバイスをスキャンする
function startDeviceScanner() {

	//デバイス表示領域を初期化する
	initDeviceData();

//--↓debug
    const disp = document.getElementById("resultDisp");

    //デバイスを表示する
	
	//表示する情報を編集する
	let	deviceHTML = "";
	deviceHTML += '<div id=TEST1' + ' class="card-panel blue lighten-4">';
	deviceHTML += '<span class="light-blue-text  text-darken-3">TEST1' + ' ' + 'デバイス１' + '</span>';
	deviceHTML += '</div>';
	disp.innerHTML += deviceHTML;

	deviceHTML = "";
	deviceHTML += '<div id=TEST2' + ' class="card-panel blue lighten-4">';
	deviceHTML += '<span class="light-blue-text text-darken-3">TEST2' + ' ' + 'デバイス２' + '</span>';
	deviceHTML += '</div>';
	disp.innerHTML += deviceHTML;

	deviceHTML = "";
	deviceHTML += '<div id=TEST3' + ' class="card-panel blue lighten-4">';
	deviceHTML += '<span class="light-blue-text text-darken-3">TEST3' + ' ' + 'デバイス３' + '</span>';
	deviceHTML += '</div>';
	disp.innerHTML += deviceHTML;

	deviceHTML = "";
	deviceHTML += '<div id=TEST4' + ' class="card-panel blue lighten-4">';
	deviceHTML += '<span class="light-blue-text text-darken-3">TEST4' + ' ' + 'デバイス４' + '</span>';
	deviceHTML += '</div>';
	disp.innerHTML += deviceHTML;

	deviceHTML = "";
	deviceHTML += '<div id=TEST5' + ' class="card-panel blue lighten-4">';
	deviceHTML += '<span class="light-blue-text text-darken-3">TEST5' + ' ' + 'デバイス５' + '</span>';
	deviceHTML += '</div>';
	disp.innerHTML += deviceHTML;

	//取得したデバイス情報を表示する
    if (document.getElementById('TEST6')) {
		//既に表示済みの時は読み飛ばす
    } else {
        //デバイスを表示する
		
		deviceHTML = "";
		deviceHTML += '<div id=TEST6' + ' class="card-panel blue lighten-4">';
		deviceHTML += '<span class="light-blue-text text-darken-3">TEST6' + ' ' + 'デバイス６' + '</span>';
		deviceHTML += '</div>';
		disp.innerHTML += deviceHTML;

    }
	
	return;
//--↑debug

	//Bluetoothデバイスをスキャンする
    navigator.bluetooth.requestLEScan(SCAN_OPTIONS)
        .then(scanner => {

            console.log(scanner.active);

            navigator.bluetooth.addEventListener('advertisementreceived', event => {

                //デバイス情報を取得する
                let deviceData = event.device;

				//取得したデバイス情報を表示する
				dispDeviceData(deviceData);

            });

    })
        .catch(error => { console.log(error); });

}

//デバイス表示領域を初期化する
function initDeviceData() {
	
    const disp = document.getElementById("resultDisp");
    disp.innerHTML = null;
	
}

//デバイスを表示する
function dispDeviceData(deviceData) {
	
    const disp = document.getElementById("resultDisp");

	//取得したデバイス情報を表示する
    if (document.getElementById(deviceData.id)) {
		//既に表示済みの時は読み飛ばす

    } else {
        //デバイスを表示する
		
		//表示する情報を編集する
		let	deviceHTML = "";
		deviceHTML +=  '<div id=' + deviceData.id + ' class="card-panel blue lighten-4">';
		deviceHTML += '<span class="light-blue-text text-darken-3">' + deviceData.id + ' ' + deviceData.name + '</span>';
		deviceHTML += '</div>';

		//編集した情報を表示する
		disp.innerHTML += deviceHTML;

    }

}

