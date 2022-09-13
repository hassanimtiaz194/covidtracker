import React from 'react'

function Pass_Value_select_to_use_Effect() {
    const [apiData, setApiData] = React.useState([]);
  const [fetchUrl, setFetchUrl] = React.useState('');
  React.useEffect(() => {
    if (fetchUrl) {
      fetch(fetchUrl)
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          setApiData(data);
        });
    }
  }, [fetchUrl]);

    return (
        <div>
    <DropdownButton id="dropdown-item-button" title="API Links" onSelect={(e)=>{setFetchUrl(e.target.eventKey)}}>
        <Dropdown.Item as="button" eventKey='API_Link1'>Link 1</Dropdown.Item>
        <Dropdown.Item as="button" eventKey='API_Link2'>Link 2</Dropdown.Item>
        <Dropdown.Item as="button" eventKey='API_Link3'>Link 3</Dropdown.Item>
    </DropdownButton> 
            
        </div>
    )
}

export default Pass_Value_select_to_use_Effect
