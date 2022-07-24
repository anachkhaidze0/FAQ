import icon from './images/icon-arrow-down.svg'
import image from './images/illustration-woman-online-mobile.svg'

const clickHandler1 = () => {
  const text = document.getElementById('q-1')
  const answer = document.getElementById('a-1')
  text.classList.toggle("font-bold")
  answer.classList.toggle("hidden")
}

const clickHandler2 = () => {
  const text = document.getElementById('q-2')
  const answer = document.getElementById('a-2')
  text.classList.toggle("font-bold")
  answer.classList.toggle("hidden")
}

const clickHandler3 = () => {
  const text = document.getElementById('q-3')
  const answer = document.getElementById('a-3')
  text.classList.toggle("font-bold")
  answer.classList.toggle("hidden")
}

const clickHandler4 = () => {
  const text = document.getElementById('q-4')
  const answer = document.getElementById('a-4')
  text.classList.toggle("font-bold")
  answer.classList.toggle("hidden")
}

const clickHandler5 = () => {
  const text = document.getElementById('q-5')
  const answer = document.getElementById('a-5')
  text.classList.toggle("font-bold")
  answer.classList.toggle("hidden")
}

const App = () => {
  

  return (
    <main className="bg-violet-600 min-h-screen w-screen flex justify-center items-center">
        <div className="w-11/12 bg-white relative pt-24 pb-12 rounded-3xl lg:w-2/3 lg:flex lg:justify-around">
          <div className="flex justify-center lg:justify-start">
            <img  className="absolute w-3/4 -top-28 lg:w-1/3 lg:top-0 lg:-left-10" src={image} alt="illustration" />

          </div>

          <div className="lg:w-1/2 ">
            <h1 className="text-3xl font-semibold text-center mb-4">FAQ</h1>

            <div className="flex flex-row mt-3 border-b-2 pb-3 justify-between mx-3">
              <div className="text-sm w-11/12">
                <p id="q-1"  className="text-gray-800">
                  How many team members can I invite?
                </p>
                <p id="a-1" className="text-gray-400 text-xs pt-2 hidden">
                  You can invite up to 2 additional users on the Free plan. There is no limit on 
                  team members for the Premium plan.
                </p>
              </div>

              <button onClick={clickHandler1} className="flex items-start mt-2 w-1/12 justify-center">
                <img src={icon} alt="illustration" />
              </button>
            </div>

            <div className="flex flex-row mt-3 border-b-2 pb-3 justify-between mx-3">
              <div className="text-sm w-11/12">
                <p id="q-2" className="text-gray-800">
                  What is the maximum file upload size?
                </p>
                <p id="a-2" className="text-gray-400 text-xs pt-2 hidden">
                  No more than 2GB. All files in your account must fit your allotted storage space.
                </p>
              </div>

              <button onClick={clickHandler2} className="flex items-start mt-2 w-1/12 justify-center">
                <img src={icon} alt="illustration" />
              </button>
            </div>

            <div className="flex flex-row mt-3 border-b-2 pb-3 justify-between mx-3">
              <div className="text-sm w-11/12">
                <p id="q-3" className="text-gray-800">
                  How do I reset my password?
                </p>
                <p id="a-3" className="text-gray-400 text-xs pt-2 hidden">
                  Click “Forgot password” from the login page or “Change password” from your profile page.
                  A reset link will be emailed to you.
                </p>
              </div>

              <button onClick={clickHandler3} className="flex items-start mt-2 w-1/12 justify-center">
                <img src={icon} alt="illustration" />
              </button>
            </div>

            <div className="flex flex-row mt-3 border-b-2 pb-3 justify-between mx-3">
              <div className="text-sm w-11/12">
                <p id="q-4" className="text-gray-800">
                  Can I cancel my subscription?
                </p>
                <p id="a-4" className="text-gray-400 text-xs pt-2 hidden">
                  Yes! Send us a message and we’ll process your request no questions asked.
                </p>
              </div>

              <button onClick={clickHandler4} className="flex items-start mt-2 w-1/12 justify-center">
                <img src={icon} alt="illustration" />
              </button>
            </div>

            <div className="flex flex-row mt-3 border-b-2 pb-3 justify-between mx-3">
              <div className="text-sm w-11/12">
                <p id="q-5" className="text-gray-800">
                  Do you provide additional support?
                </p>
                <p id="a-5" className="text-gray-400 text-xs pt-2 hidden">
                  Chat and email support is available 24/7. Phone lines are open during normal business hours.
                </p>
              </div>

              <button onClick={clickHandler5} className="flex items-start mt-2 w-1/12 justify-center">
                <img src={icon} alt="illustration" />
              </button>
            </div>

          </div>
        </div>
    </main>
  );
}

export default App;
