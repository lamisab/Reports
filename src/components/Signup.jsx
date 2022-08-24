import React from 'react'
import { Link } from 'react-scroll'


export const Signup = () => {
  return (
    <>
    <div class="min-h-screen bg-gray-100 flex flex-col justify-center py-12 px-6 lg:px-8">
  <div class="sm:mx-auto sm:w-full sm:max-w-md">
    <h2 class="mt-6 text-center text-3xl font-extrabold text-gray-900">Create your account</h2>
    <p class="mt-2 text-center text-sm text-gray-600 max-w">
      Already registered?
      <a href="#" class="font-medium text-indigo-600 hover:text-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500">Sign in</a>
    </p>
  </div>

  <div class="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
    <div class="bg-white py-8 px-6 shadow rounded-lg sm:px-10">
      <form class="mb-0 space-y-6" action="#" method="POST">

        <div>
          <label for="email" class="block text-sm font-medium text-gray-700">Email address</label>
          <div class="mt-1">
            <input id="email" name="email" type="email" autocomplete="email" required class="bg-gray-50 border border-gray-300 text-slate-600 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-300 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
          </div>
        </div>
        <div>
          <label for="email" class="block text-sm font-medium text-gray-700">Username</label>
          <div class="mt-1">
            <input id="username" name="username" type="username" autocomplete="username" required class="bg-gray-50 border border-gray-300 text-slate-600 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-300 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
          </div>
        </div>
        <div>
          <label for="password" class="block text-sm font-medium text-gray-700">Password</label>
          <div class="mt-1">
            <input id="password" name="password" type="password" autocomplete="current-password" required class="bg-gray-50 border border-gray-300 text-slate-600 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-300 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"  />
          </div>
        </div>

        <div>
          <label for="company-size" class="block text-sm font-medium text-gray-700">Role</label>
          <div class="mt-1 ">
            <select name="company-size" id="company-size" class="border-gray-300 dark:bg-gray-100 dark:border-gray-600 dark:placeholder-gray-400">
              <option value="">Please select</option>
              <option value="small" type='small'>Admin</option>
              <option value="medium">User</option>
            </select>
            {/* {==='small'?<input id="password" name="password" type="password" autocomplete="current-password" required class="bg-gray-50 border border-gray-300 text-slate-600 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-300 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"  />
: <p>wellcome</p>} */}
            
          </div>
        </div>

        <div class="flex items-center">
          <input id="terms-and-privacy" name="terms-and-privacy" type="checkbox" class="" />
          <label for="terms-and-privacy" class="ml-2 block text-sm text-gray-900"
            >I agree to the
            <a href="#" class="text-indigo-600 hover:text-indigo-500">Terms</a>
            and
            <a href="#" class="text-indigo-600 hover:text-indigo-500">Privacy Policy</a>.
          </label>
        </div>

        <div>
          <button type="submit" class="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Sign up</button>
        </div>
      </form>
    </div>
  </div>
</div>
    </>
    )
}

export default Signup