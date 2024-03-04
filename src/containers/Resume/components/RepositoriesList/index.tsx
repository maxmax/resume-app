import React from 'react';
import dayjs from 'dayjs';
import { Link } from "react-router-dom";
import { Repository } from '@/services';
import { 
	Box, 
	Grid,
	Typography,
	Button,
	Divider,
	Select,
	SelectChangeEvent,
	MenuItem,
	Table,
	TableBody,
	TableCell,
	TableContainer,
	TableHead,
	TableRow,
	TablePagination,
} from '@/components';

interface RepositoriesListProps {
  repositories?: Repository[];
	currentPage: number;
	perPage: number;
	count: number;
	selectedSort: string;
  onPageChange: (newPage: number) => void;
  onPerPageChange: (newPerPage: number) => void;
  onSortChange: (event: SelectChangeEvent<unknown>) => void;
}

const RepositoriesList: React.FC<RepositoriesListProps> = ({ 
	repositories = [], 
	currentPage, 
	perPage,
	count,
	onPageChange, 
	onPerPageChange,
  selectedSort,
  onSortChange,
}) => {

  if (!repositories || repositories.length === 0) {
    return (
      <Box sx={{ my: 4, textAlign: 'center' }}>
        <Typography variant="body1">Doesn't have any public repositories yet 🤔</Typography>
      </Box>
    );
  }

	return (
		<Box sx={{ my: 4, textAlign: 'center' }}>
			<Grid container spacing={0} justifyContent="space-between">
				<Grid item sx={{ mt: 4, ml: 4 }}>
					<Typography variant="h4">Repositories:</Typography>
				</Grid>
				<Grid item sx={{ mt: 4, mr: 4 }}>
					<Select
						value={selectedSort}
						onChange={onSortChange}
						displayEmpty
						inputProps={{ 'aria-label': 'Sort By' }}
						size="small"
						variant="standard"
					>
						<MenuItem value="updated">Updated</MenuItem>
						<MenuItem value="created">Created</MenuItem>
						<MenuItem value="pushed">Pushed</MenuItem>
					</Select>
				</Grid>
				<>
					<TableContainer>
						<Table sx={{ minWidth: 650 }} aria-label="simple table">
							<TableHead>
								<TableRow>
									<TableCell><b>Name</b></TableCell>
									<TableCell align="right"><b>Updated</b></TableCell>
									<TableCell align="right"><b>Language</b></TableCell>
									<TableCell align="right"></TableCell>
								</TableRow>
							</TableHead>
							<TableBody>
								{repositories.map(({ name, updated_at, language, full_name }) => (
									<TableRow
										key={name}
									>
										<TableCell component="th" scope="row">
											{name}
										</TableCell>
										<TableCell align="right" sx={{ width: '120px'}}>{dayjs(updated_at).format('DD-MMM-YYYY')}</TableCell>
										<TableCell align="right" sx={{ width: '160px'}}>{language || 'Unknown'}</TableCell>
										<TableCell align="right" sx={{ width: '170px'}}>
											<Link to={`/resume/${full_name}`}>
												<Button variant="outlined" size="small">Show more</Button>
											</Link>
										</TableCell>
									</TableRow>
								))}
							</TableBody>
						</Table>
					</TableContainer>
					<TablePagination
						rowsPerPageOptions={[5, 10, 25]}
						component="div"
						count={count}
						rowsPerPage={perPage}
						page={currentPage - 1}
						onPageChange={(_event, newPage) => onPageChange(newPage + 1)}
						onRowsPerPageChange={(event) => onPerPageChange(parseInt(event.target.value, 10))}
					/>
				</>
			</Grid>
			<Divider />
		</Box>
	);
};

export default RepositoriesList;
