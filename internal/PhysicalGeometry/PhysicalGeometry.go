package physicalGeometry

type PhysicalPoint = [3]float64

type PhysicalMesh struct {
	pointsArray *[]PhysicalPoint
	cellIndices *[]int
}

func NewPhysicalMesh() *PhysicalMesh {
	return &PhysicalMesh{}
}

func NewTetrahedronMesh() *PhysicalMesh {

	points := []PhysicalPoint{
		{0, 0, 0},
		{1, 0, 0},
		{0, 1, 0},
		{0, 0, 1},
	}

	indices := []int{
		0, 1, 2, 4,
	}

	return &PhysicalMesh{pointsArray: &points, cellIndices: &indices}
}

type GraphicalMesh struct {
	Vertices []PhysicalPoint
	Indices  []int
}

func (p *PhysicalMesh) ConvertToGraphicalMesh() *GraphicalMesh {
	indices := []int{
		0, 1, 2,
		1, 2, 3,
		2, 3, 4,
		4, 0, 1,
	}
	return &GraphicalMesh{*p.pointsArray, indices}
}
