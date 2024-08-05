import { MoreVertOutlined } from '@mui/icons-material';
import AddIcon from '@mui/icons-material/Add';
import { Avatar } from '@mui/material';
import FooterPriv from '../Chats/FooterPriv';
import data from '../../database/estados.json'

export default function States() {
  return (
    <div className="flex flex-col h-full bg-blue-black">
      <header className="pl-[25px] pr-[20px] h-[60px] flex justify-between items-center">
        <h1 className="text-white font-semibold text-2xl">Estados</h1>
        <div className='flex gap-5 text-grey-medium'>
          <AddIcon size={"1.25rem"} className='cursor-pointer' />
          <MoreVertOutlined size={"1.25rem"} className='cursor-pointer' />
        </div>
      </header>
      <div className="flex-1 overflow-y-auto">
        <div className='flex gap-3 items-center px-5 text-white cursor-pointer py-2'>
          <Avatar sx={{ width: 50, height: 50 }} src="../../assets/McLovin.jpg" className='object-cover border-2 border-blue-black outline outline-2 outline-green-main' />
          <div>
            <h2>Mi estado</h2>
            <p className='text-grey-medium text-sm'>Hoy a La(s) 3:08pm</p>
          </div>
        </div>

        <main className='mt-3 w-full'>
          <h2 className='text-green-main font-extralight py-5 pl-7 cursor-default'>RECIENTE</h2>

          {data.map((state, i) => (
            <div key={i} className='flex gap-3 pl-5 hover:bg-blue-dark cursor-pointer'>
              <div className='py-2'>
                <Avatar sx={{ width: 50, height: 50 }} src={state.previe} className='object-cover bg-cover border-2 border-blue-dark outline outline-2 outline-green-main' />
              </div>
              <div className='w-full border-b-[1px] border-grey-border py-2'>
                <h3 className='text-white font-light'>{state.nameFriend}</h3>
                <p className='text-grey-medium text-sm'>{state.LastTime_State}</p>
              </div>
            </div>
          ))}
          <div className='pt-2 cursor-default'>
            <FooterPriv />
          </div>
        </main>

      </div>
    </div>
  )
}
