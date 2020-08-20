package number

func getFactorial(number int) int {
	if number == 1 {
		return number
	}

	return number * getFactorial(number-1)
}
