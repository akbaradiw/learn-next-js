import Link from 'next/link'
const DashboardLayout = ({ children }) => {
    return (
        <div>
            <h1>layout dashboard</h1>
        <div>
       <Link href="/contactus">go to contat us</Link>
      </div>        
            {children}
        </div>
    )
}

export default DashboardLayout