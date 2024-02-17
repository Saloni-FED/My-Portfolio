

const TabButtons = ({ active, selectedTab, children }) => {
    const buttonStyles = active ? 'text-purple-700' : 'text-white';
    return (
      <h1 className={`${buttonStyles} cursor-pointer`} onClick={selectedTab}>
        {children}
      </h1>
    );
  };
  
  export default TabButtons;