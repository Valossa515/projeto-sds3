import NavBar from "components/NavBar";
import Footer from "components/Footer";
import DataTable from "components/DataTable";
import BarChart from "components/BarChart";
import DonutsChart from "components/DonutsChart";

function Dashboard () {
    return (
        <>
            <NavBar />
            <div className="container">
                <h1 className="text-primary py-3">Dashboard de Vendas</h1>

                <div className="row px-3">
                    <div className="col-sm-6">
                        <h5 className="text-center text-secondary">Procentagem de Sucesso</h5>
                        <BarChart />
                    </div>
                    <div className="col-sm-6">
                        <h5 className="text-center text-secondary">Porcentagem de vendas</h5>
                        <DonutsChart />
                    </div>
                </div>
                <div className="py-3">
                    <h2 className="text-primary">Todas as Vendas</h2>
                </div>
                <DataTable />
            </div>
            <Footer />
        </>
    );
}
export default Dashboard;