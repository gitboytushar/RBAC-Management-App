import React from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import SignUp from './SignUp'
import SignIn from './SignIn'

const Entry = () => {
  return (
    <div className='flex h-[98vh] overflow-hidden'>
      <div className='w-full p-4 border border-white/20 text-white/20 rounded-lg flex items-center justify-center relative'>
        {/* shadcn tabs component */}
        <Tabs
          defaultValue='signup'
          className='w-[90vw] max-w-[430px] absolute top-[17vh]'
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
