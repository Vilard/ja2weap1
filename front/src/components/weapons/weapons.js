import React, {
    useState,
    useEffect,

} from 'react'
import axios from 'axios'
import './Weapons.css'
import Sidebar from './Sidebar/Sidebar'


function WeaponProps({ weapon }) {
    return (
        <>
            <tr >
                <td>{weapon.uiIndex}</td>
                <td>{weapon.szWeaponName}</td>
                <td>{weapon.ubWeaponType}</td>
                <td>{weapon.APsToReload}</td>
                <td>{weapon.APsToReloadManually}</td>
                <td>{weapon.bAutofireShotsPerFiveAP}</td>
                <td>{weapon.bBurstAP}</td>
                <td>{weapon.bRecoilX}</td>
                <td>{weapon.bRecoilY}</td>
                <td>{weapon.nAccuracy}</td>
                <td>{weapon.ubAimLevels}</td>
                <td>{weapon.ubAttackVolume}</td>
                <td>{weapon.ubBurstPenalty}</td>
                <td>{weapon.ubCalibre}</td>
                <td>{weapon.ubHitVolume}</td>
                <td>{weapon.ubImpact}</td>
                <td>{weapon.ubMagSize}</td>
                <td>{weapon.ubReadyTime}</td>
                <td>{weapon.ubRecoilDelay}</td>
                <td>{weapon.ubShotsPerBurst}</td>
                <td>{weapon.ubShotsPer4Turns}</td>
                <td>{weapon.usRange}</td>
                <td>{weapon.Handling}</td>
            </tr>
        </>
    );
}

function Weaponlist() {
    const [weapons, setWeapons] = useState(null)
    const [toggle, setToggle] = useState(true)
    const [formFields, setFormFields] = useState({})
    const [blur, setBlur] = useState()
    const [active, setActive] = useState(false)

    const baseURL = `http://127.0.0.1:8000/api/weapons/`
    
    useEffect(() => {
        const params = formFields
        axios.get(baseURL, { params })
            .then((response) => {
                setWeapons(response.data);
            })
    },[
        baseURL,
        formFields,
        toggle,
        blur
    ])
    
    useEffect (() => {
        window.addEventListener('keyup', esc)
        

        return () => {
            window.removeEventListener('keyup', esc);
        
        }
        
    }, [active] )

    function esc (e)  {
        if (e.key === 'Escape') 
            buttonMenu(e)
    }
    
    function hclick(e) {
        let name = e.target.innerHTML
        setToggle(!toggle)
        if (!toggle) {
            name = `-${name}`
        }

        formFields['ordering'] = name
        setFormFields(formFields)

    }

    if (!weapons) return null

    const handleGetChange = (arr) => {
        const [key, value] = arr
        formFields[key] = value
        setFormFields(formFields)
    }

    const handleGetBlur = () => {
        setBlur(!blur)
        if (!blur) {
            setFormFields(formFields)
        }
    }

    const buttonMenu = (e) => {
        setActive(!active)
    }

    return (
        <>
            <Sidebar
                active={active}
                onChange={handleGetChange}
                onBlur={handleGetBlur}
            />
            <div className='service'>
              
                <div className='counter'>{`count: ${weapons.count}`}</div>
                <button
                    style={{ backgroundColor: active ? 'transparent' : 'lightblue' }}
                    onClick={buttonMenu}>Menu</button>
            </div>
            <table className='name_props'>
                <tbody>
                    <tr>
                        <th onClick={(e) => hclick(e)}>uiIndex</th>
                        <th onClick={(e) => hclick(e)}>szWeaponName</th>
                        <th onClick={(e) => hclick(e)}>ubWeaponType</th>
                        <th onClick={(e) => hclick(e)}>APsToReload</th>
                        <th onClick={(e) => hclick(e)}>APsToReloadManually</th>
                        <th onClick={(e) => hclick(e)}>bAutofireShotsPerFiveAP</th>
                        <th onClick={(e) => hclick(e)}>bBurstAP</th>
                        <th onClick={(e) => hclick(e)}>bRecoilX</th>
                        <th onClick={(e) => hclick(e)}>bRecoilY</th>
                        <th onClick={(e) => hclick(e)}>nAccuracy</th>
                        <th onClick={(e) => hclick(e)}>ubAimLevels</th>
                        <th onClick={(e) => hclick(e)}>ubAttackVolume</th>
                        <th onClick={(e) => hclick(e)}>ubBurstPenalty</th>
                        <th onClick={(e) => hclick(e)}>ubCalibre</th>
                        <th onClick={(e) => hclick(e)}>ubHitVolume</th>
                        <th onClick={(e) => hclick(e)}>ubImpact</th>
                        <th onClick={(e) => hclick(e)}>ubMagSize</th>
                        <th onClick={(e) => hclick(e)}>ubReadyTime</th>
                        <th onClick={(e) => hclick(e)}>ubRecoilDelay</th>
                        <th onClick={(e) => hclick(e)}>ubShotsPerBurst</th>
                        <th onClick={(e) => hclick(e)}>ubShotsPer4Turns</th>
                        <th onClick={(e) => hclick(e)}>usRange</th>
                        <th onClick={(e) => hclick(e)}>Handling</th>
                    </tr>
                    {weapons.results.map((weapon) => <WeaponProps weapon={weapon} key={weapon.uiIndex} />)}
                </tbody>
            </table>
        </>
    )
}
export default Weaponlist