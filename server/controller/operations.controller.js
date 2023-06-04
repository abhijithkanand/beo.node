import getSumOfEvenNumbers from "../helper/getSumOfEvenNumbers.js";

/**
 * Calculate the sum of even numbers from the request body and send the result as a JSON response.
 * @param {Object} req - The request object.
 * @param {Object} res - The response object.
 */
export const sumOfEvenNumbers = (req, res) => {
    try {
        const { numbers } = req.body
        let sum = getSumOfEvenNumbers(numbers)
        res.status(200).json({ status: true, message: 'Sum calculated.', sum })
    } catch (ex) {
        res.status(500).json({ status: false, message: 'Internal server error' })
    }
}