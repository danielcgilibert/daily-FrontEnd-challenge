const Modal = ({ selectedWinners }) => {
  return (
    <div className="absolute z-50 w-full p-5  bg-black bg-opacity-95 ">
      <h1>Modal</h1>

      <ul>
        {[...selectedWinners.keys()].map(k => (
          <li key={k}>
            {k} - {selectedWinners.get(k)}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Modal
