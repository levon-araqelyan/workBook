import React, {useEffect} from "react"
import s from "./Settings.module.scss"
import {useDispatch, useSelector} from "react-redux"
import {useHistory} from "react-router-dom"
import Works from "./Works";
import WorksInfoForm from "../../forms/WorksInfoForm";
import {
    addNewWork,
    deactivateWork,
    editWork,
    getWorks,
    putWork,
    workDelete
} from "../../store/action-creaters/workActionCreaters";
import {WithAuthRedirect} from "../WithAuthRedirect/WithAuthRedirect";
import WithRole from "../WithRole";
import Header from "../Header";

const Settings = () => {
    const dispatcher = useDispatch();
    const history = useHistory();
    const usersWorks = useSelector(({works}) => works.usersWorks);
    const editedWork = useSelector(({works}) => works.editWork);
    const id = history.location.pathname.split('/')[2];
    const worksList = usersWorks.filter(el => el.id === id).length ? usersWorks.filter(el => el.id === id)[0].worksList : [];

    useEffect(() => {
        dispatcher(getWorks())
    }, []);

    const onSubmit = (formData) => {
        const {workplace, company, country, startDate, endDate} = formData;
        const workId = Math.random();
        dispatcher(addNewWork(workplace, company, country, startDate, endDate, id, workId));
    };

    const worksDelete = workId => {
        dispatcher(workDelete(id, workId))
    };

    const editWorks = (work) => {
        dispatcher(editWork(work))
    };

    const putSingleWork = (formData) => {
        const {company, country, endDate, id, startDate, workId, workplace} = formData;
        dispatcher(putWork(company, country, endDate, id, startDate, workId, workplace))
    };

    const deactivateWorks = () => {
        dispatcher(deactivateWork())
    };


    return (
        <WithAuthRedirect>
            <Header/>
            <div className={s.settingsWrap}>
                <h1>Work List</h1>
                <WithRole>
                    <div className={s.works}>
                        <WorksInfoForm onSubmit={onSubmit} worksList={worksList}/>
                    </div>
                </WithRole>
                <Works
                    worksList={worksList}
                    worksDelete={worksDelete}
                    editWorks={editWorks}
                    editedWork={editedWork}
                    putSingleWork={putSingleWork}
                    deactivateWorks={deactivateWorks}
                />
            </div>
        </WithAuthRedirect>
    )
};

export default Settings