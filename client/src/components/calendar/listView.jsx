import { mockCalenderData } from '../../data/mockData';

const ListView = () => {
  // Use the mock data
  const data = mockCalenderData;

  // Render the list view
  return (
    <div>
      <h1>List View</h1>
      <ul>
        {data.map((event) => (
          <li key={event.id}>
            <strong>{event.title}</strong>
            <br />
            {`Start: ${event.start}, End: ${event.end}`}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ListView;
