import React from "react";
// import axios from "axios";
// import { useEffect, useState} from "react";
// import { useQuery } from 'react-query'
// import { useForm } from 'react-hook-form'
import './Sidebar.css'

// let test = {
//     uiIndex: '',
//     szWeaponName: '',
//     ubCalibre: '5',
//     ubWeaponType: 8,
//     range_min: 120,
//     range_max: '',
//     ready_time_min: '',
//     ready_time_max: '',
//     shotper4turns_min: '',
//     shotper4turns_max: '',
//     ubShotsPerBurst_min: '',
//     ubShotsPerBurst_max: '',
//     ubBurstPenalty_min: '',
//     ubBurstPenalty_max: '',
//     ubImpact_min: '',
//     ubImpact_max: '',
//     ubAttackVolume_min: '',
//     ubAttackVolume_max: '',
//     ubMagSize_min: '3',
//     ubMagSize_max: '',
//     ubHitVolume_min: '',
//     ubHitVolume_max: '',
//     bBurstAP_min: '',
//     bBurstAP_max: '',
//     bAutofireShotsPerFiveAP_min: '',
//     bAutofireShotsPerFiveAP_max: '',
//     APsToReload_min: '',
//     APsToReload_max: '50',
//     APsToReloadManually_min: '0',
//     APsToReloadManually_max: '0',
//     nAccuracy_min: '',
//     nAccuracy_max: '',
//     ubAimLevels_min: '',
//     ubAimLevels_max: '',
//     Handling_min: '',
//     Handling_max: '',
//     ordering: 'Handling'
// }

export default function Sidebar({active, onChange, onBlur }) {
    // const [formFields, setFormFields] = useState(test)

    const handleFormChange = (event) => {
        onChange([event.target.name, event.target.value])
        
    }

    const handleFormBlur = (event) => {
        onBlur(() => { })
    }
    // console.log(`sidebar =`,  active)
    

    return (
        <form 
            // style={{ backgroundColor: active ? 'red' : 'transparent' }}
            style={{ left: active ? '30px' : '-9999px' }}
            
            className="sidebar">
            <div className="el">
                <label>uiIndex</label>
                <input
                    type='number'
                    name='uiIndex'
                    onChange={handleFormChange}
                    onBlur={handleFormBlur}
                />
            </div>
            {/* <div className="el">
                <label>szWeaponName</label>
                <input
                    type='text'
                    name='szWeaponName'
                    onChange={handleFormChange}
                    onBlur={(handleFormBlur)}
                />
            </div> */}
            <div className="el">
                <label>ubWeaponType</label>
                <input
                    type='number'
                    name='ubWeaponType'
                    onChange={handleFormChange}
                    onBlur={handleFormBlur}
                />
            </div>
            <div className="el">
                <label>ubCalibre</label>
                <input
                    type='number'
                    name='ubCalibre'
                    onChange={handleFormChange}
                    onBlur={handleFormBlur}
                />
            </div>
            <div className="el">
                <label>ubReadyTime</label>
                <div>
                    <input
                        type='number'
                        name='ready_time_min'
                        placeholder="min"
                        onChange={handleFormChange}
                        onBlur={handleFormBlur}
                    />
                    <input
                        type='number'
                        name='ready_time_max'
                        placeholder="max"
                        onChange={handleFormChange}
                        onBlur={handleFormBlur}
                    />
                </div>
            </div>
            <div className="el">
                <label>ubShotsPer4Turns
                </label>
                <div>
                    <input
                        type='number'
                        name='shotper4turns_min'
                        placeholder="min"
                        onChange={handleFormChange}
                        onBlur={handleFormBlur}
                    />
                    <input
                        type='number'
                        name='shotper4turns_max'
                        placeholder="max"
                        onChange={handleFormChange}
                        onBlur={handleFormBlur}
                    />
                </div>
            </div>
            <div className="el">
                <label>ubShotsPerBurst</label>
                <div>
                    <input
                        type='number'
                        name='ubShotsPerBurst_min'
                        placeholder="min"
                        onChange={handleFormChange}
                        onBlur={handleFormBlur}
                    />
                    <input
                        type='number'
                        name='ubShotsPerBurst_min'
                        placeholder="max"
                        onChange={handleFormChange}
                        onBlur={handleFormBlur}
                    />
                </div>
            </div>
            <div className="el">
                <label>ubBurstPenalty</label>
                <div>
                    <input
                        type='number'
                        name='ubBurstPenalty_min'
                        placeholder="min"
                        onChange={handleFormChange}
                        onBlur={handleFormBlur}
                    />
                    <input
                        type='number'
                        name='ubBurstPenalty_max'
                        placeholder="max"
                        onChange={handleFormChange}
                        onBlur={handleFormBlur}
                    />
                </div>
            </div>
            <div className="el">
                <label>ubImpact</label>
                <div>
                    <input
                        type='number'
                        name='ubImpact_min'
                        placeholder="min"
                        onChange={handleFormChange}
                        onBlur={handleFormBlur}
                    />
                    <input
                        type='number'
                        name='ubImpact_max'
                        placeholder="max"
                        onChange={handleFormChange}
                        onBlur={handleFormBlur}
                    />
                </div>
            </div>
            <div className="el">
                <label>ubMagSize</label>
                <div>
                    <input type='number'
                        name='ubMagSize_min'
                        placeholder="min"
                        onChange={handleFormChange}
                        onBlur={handleFormBlur}
                    />
                    <input
                        type='number'
                        name='ubMagSize_max'
                        placeholder="max"
                        onChange={handleFormChange}
                        onBlur={handleFormBlur}
                    />
                </div>
            </div>
            <div className="el">
                <label>usRange</label>
                <div>
                    <input
                        type='number'
                        name='range_min'
                        placeholder="min"
                        onChange={handleFormChange}
                        onBlur={handleFormBlur}
                    />
                    <input
                        type='number'
                        name='range_max'
                        placeholder="max"
                        onChange={handleFormChange}
                        onBlur={handleFormBlur}
                    /></div>
            </div>
            <div className="el">
                <label>nAccuracy</label>
                <div>
                    <input
                        type='number'
                        name='nAccuracy_min'
                        placeholder="min"
                        onChange={handleFormChange}
                        onBlur={handleFormBlur}
                    />
                    <input type='number'
                        name='nAccuracy_max'
                        placeholder="max"
                        onChange={handleFormChange}
                        onBlur={handleFormBlur}
                    />
                </div>
            </div>
            <div className="el">
                <label>ubAttackVolume</label>
                <div>
                    <input
                        type='number'
                        name='ubAttackVolume_min'
                        placeholder="min"
                        onChange={handleFormChange}
                        onBlur={handleFormBlur}
                    />
                    <input
                        type='number'
                        name='ubAttackVolume_max'
                        placeholder="max"
                        onChange={handleFormChange}
                        onBlur={handleFormBlur}
                    />
                </div>
            </div>
            <div className="el">
                <label>ubHitVolume</label>
                <div>
                    <input
                        type='number'
                        name='ubHitVolume_min'
                        placeholder="min"
                        onChange={handleFormChange}
                        onBlur={handleFormBlur}
                    />
                    <input
                        type='number'
                        name='ubHitVolume_max'
                        placeholder="max"
                        onChange={handleFormChange}
                        onBlur={handleFormBlur}
                    />
                </div>
            </div>
            <div className="el">
                <label>bBurstAP</label>
                <div>
                    <input
                        type='number'
                        name='bBurstAP_min'
                        placeholder="min"
                        onChange={handleFormChange}
                        onBlur={handleFormBlur}
                    />
                    <input
                        type='number'
                        name='bBurstAP_max'
                        placeholder="max"
                        onChange={handleFormChange}
                        onBlur={handleFormBlur}
                    />
                </div>
            </div>
            <div className="el">
                <label>bAutofireShotsPerFiveAP</label>
                <div>
                    <input
                        type='number'
                        name='bAutofireShotsPerFiveAP_min'
                        placeholder="min"
                        onChange={handleFormChange}
                        onBlur={handleFormBlur}
                    />
                    <input
                        type='number'
                        name='bAutofireShotsPerFiveAP_max'
                        placeholder="max"
                        onChange={handleFormChange}
                        onBlur={handleFormBlur}
                    />
                </div>
            </div>
            <div className="el">
                <label>APsToReload</label>
                <div>
                    <input
                        type='number'
                        name='APsToReload_min'
                        placeholder="min"
                        onChange={handleFormChange}
                        onBlur={handleFormBlur}
                    />
                    <input
                        type='number'
                        name='APsToReload_max'
                        placeholder="max"
                        onChange={handleFormChange}
                        onBlur={handleFormBlur}
                    />
                </div>
            </div>
            <div className="el">
                <label>APsToReloadManually</label>
                <div>
                    <input
                        type='number'
                        name='APsToReloadManually_min'
                        placeholder="min"
                        onChange={handleFormChange}
                        onBlur={handleFormBlur}
                    />
                    <input
                        type='number'
                        name='APsToReloadManually_max'
                        placeholder="max"
                        onChange={handleFormChange}
                        onBlur={handleFormBlur}
                    />
                </div>
            </div>
            <div className="el">
                <label>ubAimLevels</label>
                <div>
                    <input
                        type='number'
                        name='ubAimLevels_min'
                        placeholder="min"
                        onChange={handleFormChange}
                        onBlur={handleFormBlur}
                    />
                    <input
                        type='number'
                        name='ubAimLevels_max'
                        placeholder="max"
                        onChange={handleFormChange}
                        onBlur={handleFormBlur}
                    />
                </div>
            </div>
            <div className="el">
                <label>Handling</label>
                <div>
                    <input
                        type='number'
                        name='Handling_min'
                        placeholder="min"
                        onChange={handleFormChange}
                        onBlur={handleFormBlur}
                    />
                    <input
                        type='number'
                        name='Handling_max'
                        placeholder="max"
                        onChange={handleFormChange}
                        onBlur={handleFormBlur}
                    />
                </div>
            </div>
        </form>
    )
}
