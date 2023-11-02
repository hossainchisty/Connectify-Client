import { useState } from 'react';
import Modal from './Model';
import Table from './Table';

const ApiKey = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [keyName, setKeyName] = useState('');

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const handleOk = () => {
    // Handle the creation of the secret key with the keyName value
    // Close the modal
    setIsModalVisible(false);
  };
  return (
    <div className='bg-white p-10 mb-4'>
      <h2 className='text-3xl font-bold mb-4'>API Keys</h2>
      <p>
        Your secret API keys are listed below. Please note that we do not
        display your secret API keys again after you generate them.
      </p>

      <p className='mt-4'>
        Do not share your API key with others, or expose it in the browser or
        other client-side code. In order to protect the security of your
        account.
      </p>

      {/* API key table */}
      <Table />

      <div className='px-6'>
        <button
          className='bg-gray-200 text-gray-800 py-1 px-4 inline-flex items-center rounded-md'
          onClick={showModal}
        >
          <svg
            className='m-1'
            stroke='currentColor'
            fill='currentColor'
            strokeWidth='0'
            viewBox='0 0 20 20'
            height='1em'
            width='1em'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path d='M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z'></path>
          </svg>
          <span>Create new secret key</span>
        </button>
        {isModalVisible && (
          <Modal
            visible={isModalVisible}
            onOk={handleOk}
            onCancel={handleCancel}
          >
            <input
              type='text'
              className='mt-2 p-2 w-full border rounded-md'
              placeholder='Enter key name'
              value={keyName}
              onChange={(e) => setKeyName(e.target.value)}
            />
          </Modal>
        )}
      </div>
    </div>

    
  );
};

export default ApiKey;
