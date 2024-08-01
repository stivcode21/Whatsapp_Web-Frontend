import { MoreVertOutlined } from '@mui/icons-material';
import AddIcon from '@mui/icons-material/Add';
import { Avatar, Box } from '@mui/material';
import FooterPriv from '../Chats/FooterPriv';
import data from '../../database/estados.json'

export default function Estados() {
    return (
        <>
            <Box className="relative">
                <header className="pl-[25px] pr-[20px] h-[60px] flex justify-between items-center bg-blue-dark absolute w-full z-10">
                    <h1 className="text-white font-semibold text-2xl">Estados</h1>
                    <div className='flex gap-5 text-grey-medium'>
                        <AddIcon size={"1.25rem"} className='cursor-pointer' />
                        <MoreVertOutlined size={"1.25rem"} className='cursor-pointer' />
                    </div>
                </header>
            </Box>

            <Box className="flex-col flex-1 overflow-y-auto w-auto scrollbar scroollbar-track-700">

                <div className='flex gap-3 items-center px-5 py-4 text-white bg-blue-dark w-full pb-2 mt-14 cursor-pointer'>
                    <Avatar sx={{ width: 50, height: 50 }} src="../../assets/McLovin.jpg" className='object-cover border-2 border-blue-dark outline outline-2 outline-green-main' />
                    <div>
                        <h2>Mi estado</h2>
                        <p className='text-grey-medium text-sm'>Hoy a La(s) 3:08pm</p>
                    </div>
                </div>

                <main className=' bg-blue-dark mt-3 w-full'>
                    <h2 className='text-green-main font-extralight py-5 pl-7 cursor-default'>RECIENTE</h2>

                    {data.map(state => (
                        <div className='flex gap-3 pl-5 hover:bg-grey-main cursor-pointer'>
                            <div className='py-2'>
                                <Avatar sx={{ width: 50, height: 50 }} src={state.previe} className='object-cover bg-cover border-2 border-blue-dark outline outline-2 outline-green-main' />
                            </div>
                            <div className='w-full border-b-[1px] border-gray-700 py-2'>
                                <h3 className='text-white font-light'>{state.nameFriend}</h3>
                                <p className='text-grey-medium text-sm'>{state.LastTime_State}</p>
                            </div>
                        </div>
                    ))}
                    <div className='pt-2 cursor-default'>
                        <FooterPriv />
                    </div>
                </main>

            </Box>
        </>
    )
}
