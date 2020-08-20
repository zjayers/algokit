package number

import (
	"testing"
)

func TestGetFactorial(t *testing.T) {

	f := []int{1, 2, 3, 4, 5}
	fs := []int{1, 2, 6, 24, 120}

	for i, _ := range f {

		if getFactorial(f[i]) != fs[i] {
			t.Errorf("Expected factorial of %v to be %v", f[i], fs[i])
		}
	}
}
