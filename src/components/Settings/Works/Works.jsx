import React from "react"
import s from "./Works.module.scss"
import {ReactComponent as Edit} from "../../../imges/edit.svg";
import {ReactComponent as Delete} from "../../../imges/delete.svg";
import {ReactComponent as Ok} from "../../../imges/ok.svg";
import {ReactComponent as Close} from "../../../imges/Close.svg";
import SingleWorksInfoForm from "../../../forms/SingleWorksInfoForm";
import WithRole from "../../WithRole";

const Works = ({worksList, worksDelete, editWorks, editedWork, putSingleWork, deactivateWorks}) => {
    return (
        <>
            {
                worksList.map(work => (
                    <div className={s.infoWrap} key={work.workId}>
                        <div className={s.info}>
                            {editedWork.workId === work.workId ? (
                                    <SingleWorksInfoForm
                                        worksList={worksList}
                                        onSubmit={putSingleWork}
                                        editedWork={editedWork}
                                    >
                                        <div className={s.icons}>
                                            <button><Ok/></button>
                                        </div>
                                        <div className={s.icons} onClick={() => deactivateWorks()}><Close/></div>
                                    </SingleWorksInfoForm>
                                )
                                : (
                                    <>
                                        <div className={s.name}><b>Workplace</b>: {work.workplace}</div>
                                        <div className={s.name}><b>Company</b>: {work.company}</div>
                                        <div className={s.name}><b>Country</b>: {work.country}</div>
                                        <div className={s.name}><b>Start Date</b>: {work.startDate}</div>
                                        <div className={s.name}><b>End Date</b>: {work.endDate}</div>
                                    </>
                                )
                            }
                        </div>
                        <div className={s.iconsWrap}>
                            {editedWork.workId !== work.workId ?
                                <WithRole>
                                    <div className={s.icons} onClick={() => editWorks(work)}><Edit/></div>
                                    <div className={s.icons} onClick={() => worksDelete(work.workId)}><Delete/></div>
                                </WithRole>
                                :
                                null
                            }
                        </div>
                    </div>
                ))
            }
        </>
    )
};

export default Works