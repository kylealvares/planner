import './Tabs.css';

const Tab = ({ id, label, currentTab, onClick  }) => {
    return (
        <div className={`tab ${currentTab === id && 'active'}`}
            onClick={onClick}>{label}</div>
    );
}
 
export default Tab;