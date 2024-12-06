import React from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import SignUp from './SignUp'
import SignIn from './SignIn'

const Entry = () => {
  return (
    <div className='flex items-center justify-center'>
      <div className='w-full p-4 flex items-center justify-center'>
        {/* shadcn tabs component */}
        <Tabs
          defaultValue='signup'
          className='w-[90vw] max-w-[430px] fixed top-[15vh]'
        >
          <TabsList className='grid gap-1 w-full grid-cols-2'>
            <TabsTrigger value='signup'>Sign Up</TabsTrigger>
            <TabsTrigger value='signin'>Sign In</TabsTrigger>
          </TabsList>

          {/* sign-Up section */}
          <TabsContent value='signup'>
            <SignUp />
          </TabsContent>

          {/* sign-In section */}
          <TabsContent value='signin'>
            <SignIn />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}

export default Entry
