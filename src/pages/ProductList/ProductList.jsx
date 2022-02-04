import { useState } from 'react';
import './productList.css';
import { DataGrid } from '@mui/x-data-grid';
import { DeleteOutline } from '@material-ui/icons';
import { Link } from 'react-router-dom';

import { productRows } from '../../data';

const ProductList = () => {

    const [data, setData] = useState(productRows);

    const handelDelete = id => {
        setData(data.filter((item) => item.id !== id));
    }

    const columns = [
        {
            field: 'id',
            headerName: 'ID',
            width: 90
        },
        {
            field: 'product',
            headerName: 'Product',
            width: 200,
            renderCell: (params) => {
                return (
                    <div className='productListItem'>
                        <img src={params.row.img} alt="" className="productListImg" />
                        {params.row.name}
                    </div>
                )
            }
        },
        {
            field: 'stock',
            headerName: 'Stock',
            width: 200
        },
        {
            field: 'status',
            headerName: 'Status',
            width: 120,
        },
        {
            field: 'price',
            headerName: 'Price',
            description: 'This column has a value getter and is not sortable.',
            sortable: false,
            width: 160,
        },
        {
            field: 'action',
            headerName: 'Action',
            with: 150,
            renderCell: (params) => {
                return (
                    <>
                        <Link to={`/product/${params.row.id}`}><button className='productListEdit'>Edit</button></Link>
                        <DeleteOutline className='productListDelete' onClick={() => handelDelete(params.row.id)} />
                    </>
                )
            }
        }
    ];

    return (
        <div className="productList">
            <DataGrid
                rows={data}
                columns={columns}
                disableSelectionOnClick
                pageSize={8}
                rowsPerPageOptions={[5]}
                checkboxSelection
            />
        </div>
    );
};

export default ProductList;
