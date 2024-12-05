import React from 'react'
import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle
} from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { ArrowRight } from 'lucide-react'

const SignUp = () => {
  return (
    <>
      <Card className='w-[90vw] md:w-2/3 lg:w-[500px] px-0 py-0 md:p-4'>
        <CardHeader className='flex w-full items-center justify-center text-center mb-2'>
          <CardTitle className='tracking-wider'>SignUp Form</CardTitle>
          <CardDescription className='text-white/40 tracking-wider text-sm md:text-lg font-thin'>
            Remember these credentials
          </CardDescription>
        </CardHeader>
        {/* signup fields */}
        <CardContent>
          <form>
            <div className='grid w-full items-center gap-6'>
              {/* username */}
              <div className='flex flex-col space-y-1'>
                <Label
                  className='text-sm md:text-md font-light text-white/70'
                  htmlFor='name'
                >
                  Username
                </Label>
                <Input
                  id='username'
                  placeholder='johndoe'
                  className='placeholder:text-white/30 placeholder:font-light tracking-wider bg-transparent border-white/20 rounded-sm'
                />
              </div>
              {/* email */}
              <div className='flex flex-col space-y-1'>
                <Label
                  className='text-sm md:text-md font-light text-white/70'
                  htmlFor='mail'
                >
                  Email Id
                </Label>
                <Input
                  id='email'
                  placeholder='johndoe@gmail.com'
                  className='placeholder:text-white/30 placeholder:font-light tracking-wider bg-transparent border-white/20 rounded-sm'
                />
              </div>
              {/* password */}
              <div className='flex flex-col space-y-1'>
                <Label
                  className='text-sm md:text-md font-light text-white/70'
                  htmlFor='password'
                >
                  Create Password
                </Label>
                <Input
                  id='password'
                  placeholder='mypassword123'
                  className='placeholder:text-white/30 placeholder:font-light tracking-wider bg-transparent border-white/20 rounded-sm'
                />
              </div>
            </div>
          </form>
        </CardContent>
        {/* cta buttons */}
        <CardFooter className='flex justify-end mt-4 pb-5'>
          <Button className='flex items-center justify-center py-1 px-4 gap-2 border border-white/40 text-white bg-white/15 hover:border-transparent font-normal hover:font-medium hover:bg-white hover:text-black active:scale-95 transition-colors duration-300 ease-in-out'>
            <span>Submit</span> <ArrowRight />
          </Button>
        </CardFooter>
      </Card>
    </>
  )
}

export default SignUp
