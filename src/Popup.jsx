import img from './assets/Red-Warning-PNG.png';

let virusCount = Math.floor(Math.random(1)*5 + 1);
const viruses  = ["Rootkit.Sirefef.Spy", "Trojan.FakeAV-Download", "PUA:Win32/GameHack", "Trojan.MegaHackv8:system32/C:", "Status_Update:dyrdy15/dyrdy15"]

function randomIP() {
    let ip = "";
    for(let i = 0; i < 4; i++){
        let ipNum = Math.floor(Math.random() * 256);
        ip += ipNum;
        if(i < 3){
            ip += ".";
        }
    }
    return ip;
}

function showViruses() {
    let newViruses = [];
    for(let i = 1; i <= virusCount; i++){
        newViruses.push(viruses[i - 1]);
    }

    return newViruses;
}

function padTo2Digits(num) {
    return num.toString().padStart(2, '0');
  }
  
  function formatDate(date) {
    return [
      date.getFullYear(),
      padTo2Digits(date.getMonth() + 1),
      padTo2Digits(date.getDate()),
    ].join('-');
  }

export function Popup() {
    return (
        <>
        <div className='popup'>
            <div className='header'>
                <img src={img} alt="warning icon" />
                <h1>WARNING</h1>
            </div>
            <h3>YOUR COMPUTER IS INFECTED</h3>
            <p className='virusInfo'>System detected ({virusCount}) Potentially Malicious Viruses: {showViruses().map(virus => {
                return <><b><span key={virus}>{virus}</span></b>, </>;
            })}. Your Personal & Financial Information <b>IS NOT SAFE</b></p>
            <p className='whatToDo'>To Remove Viruses, Call Tech Support Online Now:</p>
            <div className='phone'><b>442-064-546</b></div>
            <p className='lowerText'>(High Priority Virus Removal Call Line)</p>

            <span>Your IP Address: <b>{randomIP()}</b> | Generated on <b>{formatDate(new Date())}</b> | Priority: <b>Urgent</b></span>
        </div>
        </>
    )
}