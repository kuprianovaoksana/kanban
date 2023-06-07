import css from './footer.module.scss'
import {useTasks} from "../../hooks/tasks/use-tasks";

export const Footer = (props) => {
    const {getActiveTaskCount, getFinishedTaskCount} = useTasks();

    return (
        <footer className={css.footer}>
            <div>
                <span>Active task: {getActiveTaskCount()}</span>
                <span>Finished task: {getFinishedTaskCount()}</span>
            </div>
            <div>Kanban board by KYPRIANOVA O., 2023</div>
        </footer>
    )
}
