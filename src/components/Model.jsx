/* eslint-disable react/prop-types */

const Modal = ({ visible, onOk, onCancel }) => {
  if (!visible) {
    return null;
  }

  return (
    <div className='fixed inset-0 z-10 flex items-center justify-center'>
      <div className='fixed inset-0 bg-gray-500 bg-opacity-75' />
      <div className='relative z-20 w-screen max-w-lg overflow-hidden'>
        <div className='bg-white rounded-lg shadow-xl'>
          <div className='px-4 py-5 sm:p-6'>
            <h3 className='text-lg font-semibold text-black' id='modal-title'>
              Create new secret key
            </h3>
            <div className='mt-2'>
              <div className='mb-6'>
                <label htmlFor='name' className='block mb-2 font-bold text-black'>
                  Name
                  <span className='text-gray-400 text-sm ml-2'>Optional</span>
                </label>
                <input
                  type='text'
                  id='name'
                  className='border border-gray-300 hover:border-emerald-500 text-sm rounded-lg focus:ring-emerald-600 focus:border-emerald-600 foucs:border-transparent block w-full p-2'
                  placeholder='My Test Key'
                />
              </div>
            </div>
          </div>
          <div className='py-3 px-4 sm:flex sm:flex-row-reverse sm:px-6'>
            <button
              onClick={onOk}
              type='button'
              className='inline-flex w-full justify-center rounded-md bg-emerald-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-emerald-700 sm:ml-3 sm:w-auto'
            >
              Create secret key
            </button>
            <button
              onClick={onCancel}
              type='button'
              className='mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto'
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
