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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from '@/components/ui/select'
import { Check, X } from 'lucide-react'

const InputData = ({ InputDiv, setInputDiv }) => {
  return (
    <>
      <div>
        {/* content behind card */}
        <div
          className={`z-20 ${InputDiv} inset-0 bg-black/70 h-screen w-full`}
        ></div>
        {/* card content */}
        <div
          className={`z-30 ${InputDiv} left-0 -top-12 md:top-0 h-screen w-full flex items-center justify-center`}
        >
          <Card className='w-[90vw] md:w-2/3 lg:w-[500px] px-0 py-0 md:py-3 md:px-4 motion-preset-shrink motion-duration-300'>
            <CardHeader className='flex w-full items-center mb-2'>
              <CardTitle>Add New Card</CardTitle>
              <CardDescription className='tracking-wider'>
                Fill employee's information
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form>
                <div className='grid w-full items-center gap-5'>
                  <div className='flex flex-col space-y-1.5'>
                    <Label
                      className='text-sm md:text-md font-light text-white/70'
                      htmlFor='name'
                    >
                      Employee Name
                    </Label>
                    <Input
                      id='name'
                      placeholder='John doe'
                      className='placeholder:text-white/30 placeholder:font-light tracking-wider bg-transparent border-white/20 rounded-sm'
                    />
                  </div>
                  <div className='flex flex-col space-y-1.5'>
                    <Label
                      className='text-sm md:text-md font-light text-white/70'
                      htmlFor='role'
                    >
                      Employee Role
                    </Label>
                    <Input
                      id='role'
                      placeholder='e.g. HR Manager'
                      className='placeholder:text-white/30 placeholder:font-light tracking-wider bg-transparent border-white/20 rounded-sm'
                    />
                  </div>
                  <div className='flex flex-col space-y-1.5'>
                    <Label
                      className='text-sm md:text-md font-light text-white/70'
                      htmlFor='mail'
                    >
                      Employee Email Id
                    </Label>
                    <Input
                      id='email'
                      placeholder='johndoe@gmail.com'
                      className='placeholder:text-white/30 placeholder:font-light tracking-wider bg-transparent border-white/20 rounded-sm'
                    />
                  </div>

                  {/* Select Status active or inactive */}
                  <div className='flex flex-col space-y-1.5'>
                    <Label
                      className='text-sm md:text-md font-light text-white/70'
                      htmlFor='status'
                    >
                      Employee Status
                    </Label>
                    <Select>
                      <SelectTrigger id='status'>
                        <SelectValue placeholder='Select' />
                      </SelectTrigger>
                      <SelectContent position='popper'>
                        <SelectItem value='active'>Active</SelectItem>
                        <SelectItem value='inactive'>In-Active</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  {/* department */}
                  <div className='flex flex-col space-y-1.5'>
                    <Label
                      className='text-sm md:text-md font-light text-white/70'
                      htmlFor='department'
                    >
                      Work Department
                    </Label>
                    <Input
                      id='department'
                      placeholder='e.g. Development, Marketing'
                      className='placeholder:text-white/30 placeholder:font-light tracking-wider bg-transparent border-white/20 rounded-sm'
                    />
                  </div>
                </div>
              </form>
            </CardContent>
            <CardFooter className='flex justify-between'>
              <Button
                onClick={() => setInputDiv('hidden')}
                className='flex items-center justify-center py-1 pl-3 pr-2 gap-1 border border-white/20 text-white/40 bg-transparent font-normal hover:border-transparent hover:bg-red-700 hover:text-white active:scale-95 transition-colors duration-300 ease-in-out'
              >
                <span>Cancel</span> <X />
              </Button>
              <Button className='flex items-center justify-center py-1 px-5 gap-3 border border-white/40 text-white bg-white/15 hover:border-transparent font-normal hover:font-medium hover:bg-white hover:text-black active:scale-95 transition-colors duration-300 ease-in-out'>
                <span>Add</span> <Check />
              </Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </>
  )
}

export default InputData
