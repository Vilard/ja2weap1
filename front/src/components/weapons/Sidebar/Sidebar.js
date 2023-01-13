import React from "react";
import './Sidebar.css'


export default function Sidebar({active, onChange, onBlur }) {

    const handleFormChange = (event) => {
        onChange([event.target.name, event.target.value])
        
    }

    const handleFormBlur = (event) => {
        onBlur(() => { })
    }
    
    return (
        <form 
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
